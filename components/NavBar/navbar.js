import react from'react';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';

function AlignmentExample() {
    return (
        <>
            <Nav className="justify-content-center" activeKey="/find">
                <Nav.Item>
                    <Nav.Link href="/find">Поиск</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/Logic">Алгоритм</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/About_us">О нас</Nav.Link>
                </Nav.Item>
            </Nav>
            <p className="right-aligned mt-4 mb-4">
            </p>
            <Nav className="justify-content-end" activeKey="/find">
                <Nav.Item>
                    <Nav.Link href='/find'>Поиск</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='/Logic'>Алгоритм</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='/About_us'>О нас</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default AlignmentExample;