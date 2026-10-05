import React from "react";
import Modal from "react-modal";

// Google Calendar appointment schedule (embed form of https://calendar.app.google/TawT4ax7HnYaMGQ27).
// The short link can't be framed; the full URL with ?gv=true is Google's embeddable version.
const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3_7IQ7TJYT6BK2l6ZRIZ_aUAH6CzSS_ll8RttXjiQOd-JJAzddtIabudLMnv64Q29D2wVPhHvU?gv=true";

Modal.setAppElement("#root");

function ContactPopup({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="contact-modal booking-modal"
      overlayClassName="contact-overlay"
      contentLabel="Book a call with Accoric"
    >
      <div className="d-flex justify-content-between align-items-start">
        <h2>Book a Call</h2>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </div>

      <iframe
        src={BOOKING_URL}
        title="Book a call with Accoric"
        className="booking-frame"
      />
    </Modal>
  );
}

export default ContactPopup;
