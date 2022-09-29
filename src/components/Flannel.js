import React from "react"

const FlannelForm = () => {

  return (
    <div className="container py-12 lg:py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Purchase your shirt today!
      </h2>
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="RK9UUJJDGBG68" />
        <table>
        <tr><td><input type="hidden" name="on0" value="Sizes"/>Sizes</td></tr><tr><td><select name="os0">
          <option value="S">S $75.00 USD</option>
          <option value="M">M $75.00 USD</option>
          <option value="L">L $75.00 USD</option>
          <option value="XL">XL $75.00 USD</option>
          <option value="XXL">XXL $75.00 USD</option>
        </select> </td></tr>
        </table>
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
  )
}

export default FlannelForm

