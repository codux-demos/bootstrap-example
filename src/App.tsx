import { useCallback, useState } from 'react';
import styles from './App.module.scss';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Classnames from 'classnames';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
    const cards = [
        {
            imgSrc: 'https://static.wixstatic.com/media/ff6bf6_0ffd4aaa67514d7ab0d8bac0a5cc4e76~mv2.png',
            title: 'Bali Paradise',
            text: `Escape to a luxurious Balinese resort. Indulge in private villas and gourmet dining from $899.`,
            category: 'Beach vacation',
        },
        {
            imgSrc: 'https://static.wixstatic.com/media/ff6bf6_c48c3afc65664a04bc4ef491ed2cd7c1~mv2.png',
            title: 'Egyptian Adventure',
            text: `Visit the Pyramids, sail the Nile River, and explore ancient wonders. Book your adventure from $1999.`,
            category: 'Adventure',
        },
        {
            imgSrc: 'https://static.wixstatic.com/media/ff6bf6_5ab7bb68c8314568be8919f79d25b8de~mv2.png',
            title: 'Maldives Retreat',
            text: `Discover white beaches and exciting water activities for the whole family. Book your family trip from $2499.`,
            category: 'Family',
        },
        {
            imgSrc: 'https://static.wixstatic.com/media/ff6bf6_aed8d12bb5e54c7e9f05629af1164a5d~mv2.png',
            title: 'Urban Escape',
            text: `Immerse yourself in the chic and stylish atmosphere of Paris. Book a sophisticated escape from $1599.`,
            category: 'City break',
        },
        {
            imgSrc: 'https://static.wixstatic.com/media/ff6bf6_556449ac0e114a98b282ebe343e4b1d9~mv2.png',
            title: 'Wine Getaway',
            text: `Unwind in California's scenic vineyards. Book a tasteful and relaxing weekend from $899.`,
            category: 'Cultural',
        },
        {
            imgSrc: 'https://static.wixstatic.com/media/ff6bf6_df281247b1d94b33b676979075c8af14~mv2.png',
            title: 'New York Buzz',
            text: `Stay in a luxury hotel and catch the next Broadway show. Live the energy of the city starting from $1499.`,
            category: 'Mini trip',
        },
    ];

    const badges = [
        { text: 'Beach vacation', variant: 'dark' },
        { text: 'City break', variant: 'dark' },
        { text: 'Adventure', variant: 'dark' },
        { text: 'Cultural', variant: 'dark' },
        { text: 'Family', variant: 'dark' },
        { text: 'Mini trip', variant: 'dark' },
    ];

    const caruoselItems = [
        {
            imgSrc: 'https://static.wixstatic.com/media/ff6bf6_ec980334728a4f2bba16d5270959edfb~mv2.png',
            title: 'American Landscapes',
            text: 'Explore the mesmerizing beauty of Antelope Canyon.',
        },
        {
            imgSrc: 'https://static.wixstatic.com/media/ff6bf6_f785022be29540f1bcab151bd978008d~mv2.png',
            title: 'Serene Terraces',
            text: `Discover the tranquility of Bali's lush rice fields.`,
        },
        {
            imgSrc: 'https://static.wixstatic.com/media/ff6bf6_b5426d5dd612471d81bc114f535cafb2~mv2.png',
            title: 'Enchanting Venice',
            text: 'Discover the charm and romance of the floating city.',
        },
    ];

    const [index, setIndex] = useState(0);

    const badgeClickHandler = useCallback((badge: string) => {
        setFilter(badge);
    }, []);

    const [filter, setFilter] = useState('');

    return (
        <div className={styles.App}>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Adventrips</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <NavDropdown title="Destinations" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Americas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Europe</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Asia</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Mini trips</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Carousel
                activeIndex={index}
                onSelect={setIndex}
                slide={false}
                className={Classnames(styles.carousel, styles['font-style'])}
            >
                {caruoselItems.map((item) => (
                    <Carousel.Item>
                        <Image src={item.imgSrc} fluid />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className={styles.content}>
                <div className={Classnames(styles['flex-row'], styles.badges)}>
                    {badges.map((badge) => {
                        return (
                            <Badge
                                pill
                                bg={filter === badge.text ? 'primary' : 'dark'}
                                text="light"
                                onClick={() => badgeClickHandler(badge.text)}
                            >
                                {badge.text}
                            </Badge>
                        );
                    })}
                </div>
                <div className={Classnames(styles['font-style'], styles['text-layout'])}>
                    <h3>Adventure Awaits!</h3>
                    <p className={styles['text-width']}>
                        Let your wanderlust take flight as you venture into the world's most breathtaking and inspiring places.
                    </p>
                </div>
                <div className={Classnames(styles['flex-row'], styles['diff-layout'])}>
                    {cards
                        .filter((card) => (filter ? card.category.includes(filter) : true))
                        .map((card) => {
                            return (
                                <div className={styles['card']}>
                                    <Card>
                                        <Card.Img variant="top" src={card.imgSrc} />
                                        <Card.Body className={styles['font-style']}>
                                            <Card.Title>{card.title}</Card.Title>

                                            <Card.Text>
                                                <span className={styles['card-text']}>
                                                    {card.text}
                                                </span>
                                            </Card.Text>

                                            <Button variant="dark">Book Now</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            );
                        })}
                </div>
                <div className={Classnames(styles['footer'])}>
                    <div className={styles['footer-titles']}>
                        <span>Home</span>
                        <span>About</span>
                        <span>Destinations</span>
                        <span>Contact</span>
                        <span>Packages</span>
                    </div>
                    <div className={styles['join-our']}>
                        <p>Join Our Newsletter</p>
                        <span className={styles['input']}>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Email"
                                    aria-label="Recipient's username"
                                />
                                <InputGroup.Text id="addon">Join</InputGroup.Text>
                            </InputGroup>
                        </span>
                        <div className={styles['copyrights']}>
                            Created with Codux, all rights reserved ©
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
