import React from 'react';

// In this example, we are using the es6 object destructuring.
// A react stateless component always receive the props parameter, but we can destructure to expose the properties.

// A function is used to show/hide the check mark to illustrate how style works in react.
// As you can see, we use an object to represent a key/value pair of the style attribute ( ex.: { display: none })

// Another ways could be: 
// className={checked.indexOf(t.id) == -1 ? 'classToHide' : 'classToShow'
// className={getClass(t.id)}
// An arrow function is used to call the handleClick, passing the parameters based on the current context.

const Card = ({user, handleClick}) => {
    
    const getCardClass = u => u.gender == 'M' ? 'card male' : 'card female';
    
    return <div className="col-md-4">
                <div className={getCardClass(user)} onClick={() => handleClick()}>
                    <div className="photo"> 
                        <img src={user.photo} />
                    </div>
                    <div className="name"> 
                        {`${user.last_name}, ${user.first_name}`}
                    </div>
                    <hr />
                    <div className="email">
                        {user.email} 
                    </div>
                </div>
            </div>
};

export default Card;