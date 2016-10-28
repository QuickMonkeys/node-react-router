import React from 'react';

export default ({handleChange, total, filtered}) =>
    <div style={{marginTop: '14px'}}>
        <input 
            type="text" 
            placeholder="Search for ..."
            onChange={(e) => handleChange(e.target.value)}
            className="form-control"
        />
        <div>
            <span>
                Total: {filtered} of {total}
            </span>
        </div>
        <hr />
    </div>