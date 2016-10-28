import React from 'react';

export default ({text, match}) => {
    var found = text.toLowerCase().indexOf(match.toLowerCase());
    return (found == -1) 
        ? <span>{text}</span>
        : ( <span>
                {text.substr(0,found)}
                <span className='highlight'>
                    {text.substr(found,match.length)}
                </span>
                {text.substr(found+match.length)}
            </span>
           );
}