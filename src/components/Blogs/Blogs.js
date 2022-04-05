import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className="context-api-info">
                <h4>1.What is Context api ?</h4>
                <ol>
                    <li>Context api is a react structere.</li>
                    <li>If we need to pass unique details another component with out props drilling we use Context api.</li>
                    <li>It's helps to props drilling.</li>
                    <li>If we use Context api,we can diclar it as a variable with a default parameter.</li>
                    <li>It's like a component.</li>
                </ol>
            </div>
            <div className="semantic-info">
                <h4>2.What is a Semantic tag ? </h4>
                <ol>
                    <li>One the most important features of html 5.</li>
                    <li>When a screen reader, or any of assistive device scans a web page,it gets information about the HTML structure.</li>
                    <li>Semantic tag is a describe tag for developer and browser. </li>
                    <li>Semantic tags ar header, main,section,nav,article,alt,footer </li>
                </ol>
            </div>
            <div className="inline-block-inline-block">
                <h4>3.What is inline ,block and inline-block ?</h4>
                <ol>
                    <li>inline element does not star a new line.like a, img, input,span. They have some width.</li>
                    <li>block line element always stat a new line. like p, h1 to h6,div,section,ol,ul,li.</li>
                    <li>inline-block is like a block line tag, but it behavior link inline tag.</li>
                </ol>

            </div>
        </div>
    );
};

export default Blogs;