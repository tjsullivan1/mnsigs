import classNames from "classnames"
import React, { useState } from "react"
import Button from "../components/Button"

const TicketForm = () => {
  // const [email, setEmail] = useState()
  // const [message, setMessage] = useState()
  // const [disabled, setDisabled] = useState(false)

  // const handleSubmit = async event => {
  //   event.preventDefault()
  //   setDisabled(true)
  //   setMessage("Sending...")
  //   const response = await addToMailchimp(email)
  //   if (response.result === "error") {
  //     if (response.msg.toLowerCase().includes("already subscribed")) {
  //       setMessage("You're already on to the list!")
  //     } else {
  //       setMessage("Some error occured while subscribing you to the list.")
  //     }
  //     setDisabled(false)
  //   } else {
  //     setMessage(
  //       "Thanks! Please check your e-mail and click the confirmation link."
  //     )
  //   }
  // }

  return (
    <div className="container py-12 lg:py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Purchase your tickets today!
      </h2>
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="YMWG4VCWBA42Q"/>
        <table>
        <tr><td><input type="hidden" name="on0" value="Attendee Type?"/>Attendee Type?</td></tr><tr><td><input
          select name="os0">
          <option value="Brother">Brother $55.00 USD</option>
          <option value="Dues Paying Member">Dues Paying Member $50.00 USD</option>
          <option value="Guest">Guest $55.00 USD</option>
        </input> </td></tr>
        </table>
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
      <div
        className={classNames("w-full pt-4 text-sm", { "opacity-0": !message })}
      >
        {message}
      </div>
    </div>
  )
}

export default TicketForm