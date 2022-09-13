interface ButtonProps {
    title: string;
}

function Button(props: ButtonProps) {
    return <button>{props.title}</button>
}

function App() {
    return (
        <div>
            <Button title="Send" />
            <Button title="Delete" />
        </div>
    )
}

export default App
