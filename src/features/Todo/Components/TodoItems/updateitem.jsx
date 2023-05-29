import React from 'react';
import PropTypes from 'prop-types';

updateitem.propTypes = {
    onUpdate: PropTypes.func,
    onSave: PropTypes.func,
};

function updateitem(props) {
    const {Update}=props;
    return (
        <div>
            <input
        type="text"
        onChange={(e) => setNewtodo(e.target.value)}
        value={newtodo}
      />
      
      <button onClick={updateTodoItem}>Save</button>
      <button onClick={}>Cancel</button>
        </div>
    );
}

export default updateitem;