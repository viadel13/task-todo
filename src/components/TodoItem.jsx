import { useState } from 'react';
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    TextField,
    Box,
    Typography
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.text);

    const handleSave = () => {
        if (editValue.trim() === '') return;
        onEdit(todo.id, editValue);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditValue(todo.text);
        setIsEditing(false);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (isEditing) {
        return (
            <ListItem
                sx={{
                    py: 2,
                    '&:hover': { bgcolor: 'grey.50' }
                }}
            >
                <Box sx={{ display: 'flex', gap: 1, width: '100%', alignItems: 'center' }}>
                    <TextField
                        fullWidth
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                        size="small"
                        autoFocus
                    />
                    <IconButton color="success" onClick={handleSave}>
                        <CheckIcon />
                    </IconButton>
                    <IconButton color="error" onClick={handleCancel}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </ListItem>
        );
    }

    return (
        <ListItem
            sx={{
                py: 2,
                bgcolor: todo.completed ? 'grey.50' : 'transparent',
                '&:hover': { bgcolor: todo.completed ? 'grey.100' : 'grey.50' }
            }}
            secondaryAction={
                <Box>
                    <IconButton edge="end" onClick={() => setIsEditing(true)} sx={{ mr: 1 }}>
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={() => onDelete(todo.id)} color="error">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            }
        >
            <ListItemButton onClick={() => onToggle(todo.id)} sx={{ borderRadius: 1 }}>
                <ListItemIcon>
                    {todo.completed ? (
                        <CheckCircleIcon color="success" />
                    ) : (
                        <RadioButtonUncheckedIcon color="action" />
                    )}
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography
                            sx={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? 'text.secondary' : 'text.primary'
                            }}
                        >
                            {todo.text}
                        </Typography>
                    }
                    secondary={
                        <Typography variant="caption" color="text.secondary">
                            {formatDate(todo.createdAt)}
                        </Typography>
                    }
                />
            </ListItemButton>
        </ListItem>
    );
}