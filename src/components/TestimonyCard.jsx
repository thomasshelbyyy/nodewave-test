const TestimonyCard = ({ user, testimony }) => {
    return (
        <div className="w-auto h-40 rounded-lg bg-white p-4 font-semibold">
            <div className="h-15 text-black">{testimony}</div>
            <p className="text-sky-500">{user}</p>
        </div>
    )
}

export default TestimonyCard