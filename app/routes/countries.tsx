import { baseURL } from "constants/base-url"
import type { Route } from "./+types/countries"
import type { Countries } from "interfaces/countries";
import { Link } from "react-router";


//loader pra buscar dados no server-side 
export async function loader(): Promise<Countries[]> {
    const response = await fetch(baseURL)
    return response.json()

}

export default function Countries({ loaderData }: Route.ComponentProps) {

    if (!loaderData[0].name.common) {
        return <h2>Nenhum dado encontrado...</h2>
    }

    return (
        <div>
            <ul>
                {loaderData.map((country, key) => (
                    <li key={key}>
                        <Link to={`/countries/${country.name.common}`} >{country.name.common}</Link>
                        <div>
                            Region: {country.region} | Population {country.population}
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}
