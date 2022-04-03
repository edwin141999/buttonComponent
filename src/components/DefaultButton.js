import './DefaultButton.css'

export default function DefaultButton() {
  return (
    <>
      <div>
        <button className="default">Default</button>
      </div>
      <div>
        <button className="outline">Default</button>
      </div>
      <div>
        <button className="text">Default</button>
      </div>
      <div>
        <button className="disableShadow">Default</button>
      </div>
      <div>
        <button className="disabled">Disabled</button>
        <button className="disabledtxt">Disabled</button>
      </div>
      <div className='div'>
        <button className="icon"><span className="material-icons">
          add_shopping_cart
        </span>Default</button>
        <button className="icon">Default<span className="material-icons">
          add_shopping_cart
        </span></button>
      </div>
      <div>
        <button className="sm">Default</button>
        <button className="md">Default</button>
        <button className="lg">Default</button>
      </div>
      <div>
        <button className="default">Default</button>
        <button className="primary">Default</button>
        <button className="secondary">Secundary</button>
        <button className="danger">Danger</button>
      </div>
    </>
  )
}
