import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Spinner.css";

function Spinner() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);

        if (document.readyState === "complete") {
            setTimeout(() => setLoading(false), 2000);
            return;
        }

        const handleLoad = () => {
            setTimeout(() => setLoading(false), 2000);
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    }, [location]);

    return (
        loading && (
            <section className="SeccaoDeSpinner">
                <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        )
    );
}

export default Spinner;
