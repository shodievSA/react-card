function Header()
{
    return (
        <header className="header">
            <img className="logo" src="./react-logo.png" />
            <h2>React Facts</h2>
        </header>
    )
}

function Content()
{
    return (
        <content className="content">
            <h1>Fun facts about React:</h1>
            <ul className="listItems">
                <li>Was first released in 2013</li>
                <li>Was originally developed by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </content>
    )
}

function StaticPage() 
{
    return (
        <div className="main">
            <Header />
            <Content />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StaticPage />);

