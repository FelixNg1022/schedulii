import type { ReactElement } from "react";
import React from "react";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import "../pages/Homepage.css";

const Homepage = (): ReactElement => (
    <>
        <Navbar />
        <section className="container">
            <div id="left">
                <h1>Your Calendar</h1>
                <p>The calendar component can go here.</p>
            </div>
            <div id="right">
                <h1>Your Events</h1>
                <EventCard
                    title="Sample Event"
                    description="Event description here."
                />
            </div>
        </section>
    </>
);

export default Homepage;
