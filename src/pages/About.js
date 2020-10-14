import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

function About() {
    return (
        <div>
            <Hero backgroundImage="https://c1.staticflickr.com/7/6019/6283399702_1f37edfd95_b.jpg">

            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Card>
                    <Col size="md-5">
                        <p>
                            I was born and raised north of Salt Lake in Bountiful, UT. Growing up, I loved to learn, ski, play sports and play videogames with my friends. I was a student at Bountiful High School where I participated in student council. Following high school I attended BYU's Marriott School of Business and majored in Finance.
                        </p>
                    </Col>
                    <Col size="md-5">
                        <p>
                            Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
                            malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
                            ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
                            nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
                            Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
                            porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
                        </p>
                    </Col>
                </Card>
            </Container>
        </div>
    );
}

export default About;
