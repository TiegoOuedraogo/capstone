import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';

const DataFetchingComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Define fetchData function
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle the error appropriately
        }
    };

    useEffect(() => {
        fetchData().then((response) => {
            setData(response);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    {/* Render your data here */}
                    <h2>Data Fetched:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default DataFetchingComponent;