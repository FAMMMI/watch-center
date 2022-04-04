import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 gap-4 px-2 py-2 bg-slate-100'>
            <div className='bg-slate-200 rounded-md px-6 py-6'>
                <p className='text-xl font-bold my-4' >
                    1. What is Context API?
                </p>
                <p className='text-lg my-4'><b>Answer:</b> The Context API is a React structure that ensure us to exchange unique details and assists in solving prop-drilling from all levels of an application.One of the best things about React is that we have a lot of different ways to solve a specific problem. There is a few different form libraries, a bunch of CSS libraries and we have a lot of different libraries specific to state data problems in React.Hence we have so many libraries to choose from, sometimes we might install and use libraries that we do not need. Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they are passing state to their components . Also it can reduce bundle size and improve the project performance.</p>
            </div>
            <div className='bg-slate-200 rounded-md px-2 py-2'>
                <p className='text-xl font-bold my-4'>2. Semantic Tag?</p>
                <p className='text-lg my-4'><b>Answer:</b> A semantic element is readable and understandable to  both the browser and the developer.
                    such examples are : table tag ,header tag, footer tag, section tag, summery tag etc . It look easier to read a code where semantic tags are used as they are easier to understand . Also the browser can understand the tags and the usage of these tags , so the performance is enhanced . Overall, semantic elements also lead to more consistent code. By creating a standard semantic element, it makes it easier for everyone.</p>
            </div>
        </div>
    );
};

export default Blogs;