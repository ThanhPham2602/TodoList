import React, { useState } from 'react';

function MyComponent() {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateSave = () => {
    if (isEditing) {
      
      console.log('Save data');
    } else {
      
      console.log('Start editing');
    }
    setIsEditing(!isEditing);
  };

  const handleDeleteCancel = () => {
    if (isEditing) {
      
      console.log('Cancel editing');
    } else {
      
      console.log('Delete data');
    }
    setIsEditing(false);
  };

  return (
    <div>
      <button onClick={handleUpdateSave}>
        {isEditing ? 'Save' : 'Update'}
      </button>
      <button onClick={handleDeleteCancel}>
        {isEditing ? 'Cancel' : 'Delete'}
      </button>
    </div>
  );
}

export default MyComponent;
