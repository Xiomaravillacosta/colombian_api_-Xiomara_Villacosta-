import React, { useState, useEffect } from 'react';

function Presidentes() {
    const [presidentes, setPresidentes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerPresidentes = async () => {
            const url = 'https://api-colombia.com/api/v1/President';
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setPresidentes(agruparPorPartido(data));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        obtenerPresidentes();
    }, []);

    const agruparPorPartido = (presidentes) => {
        const agrupados = {};

        presidentes.forEach(presidente => {
            const partido = presidente.politicalParty || 'Independiente';

            if (!agrupados[partido]) {
                agrupados[partido] = 0;
            }
            agrupados[partido]++;
        });

        return Object.keys(agrupados).map(partido => ({
            partido,
            cantidad_presidentes: agrupados[partido]
        })).sort((a, b) => b.cantidad_presidentes - a.cantidad_presidentes);
    };

    if (loading) {
        return <div>Cargando datos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <ul>
                {presidentes.map((item, index) => (
                    <li key={index}>
                        {item.partido} -----------------  {item.cantidad_presidentes} presidentes
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Presidentes;
