import React from 'react'
import Avatar from '@mui/material/Avatar'
import { DeleteOutlined } from '@mui/icons-material'
import { Typography, IconButton, CardContent, CardHeader, Card } from '@mui/material'

function DataCard({ item, deleteItem }) {
    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: '#2196f3' }}>
                            {item.firstName[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => { deleteItem(item.id) }}>
                            <DeleteOutlined sx={{ color: '#2196f3' }} />
                        </IconButton>
                    }
                    title={item.firstName + " " + item.lastName}
                    subheader={item.age}
                />
                <CardContent variant='body2' color="textSecondary">
                    <Typography ariant='body2' color="textSecondary" >
                        {item.email}
                    </Typography>
                    <Typography ariant='body2' color="textSecondary" >
                        {item.bio}
                    </Typography>
                    <Typography ariant='body2' color="textSecondary">
                        {item.city}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default DataCard
