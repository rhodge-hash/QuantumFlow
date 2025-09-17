# Data Model for Project Management System

## User

- **id**: UUID (Primary Key)
- **name**: String
- **email**: String (Unique)
- **created_at**: Timestamp
- **updated_at**: Timestamp

## Project

- **id**: UUID (Primary Key)
- **name**: String
- **description**: Text
- **owner_id**: UUID (Foreign Key to User.id)
- **created_at**: Timestamp
- **updated_at**: Timestamp

## Task

- **id**: UUID (Primary Key)
- **title**: String
- **description**: Text
- **status**: String (e.g., "todo", "in_progress", "done")
- **project_id**: UUID (Foreign Key to Project.id)
- **assignee_id**: UUID (Foreign Key to User.id)
- **created_at**: Timestamp
- **updated_at**: Timestamp

## FeatureBranch

- **id**: UUID (Primary Key)
- **branch_name**: String
- **task_id**: UUID (Foreign Key to Task.id)
- **created_at**: Timestamp
