import { Navbar as Header, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router";

export default function Navbar() {

    return (
        <Header fluid>
            <NavbarBrand as={Link} href="https://flowbite-react.com">
                <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">REST<span className="text-blue-600">Explorer</span></span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href="#">
                    About
                </NavbarLink>
                <NavbarLink href="#">Countries</NavbarLink>
                <NavbarLink href="#">Login</NavbarLink>

            </NavbarCollapse>
        </Header>

    )
}
