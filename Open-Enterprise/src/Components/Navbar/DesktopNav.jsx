

const DesktopNav = () => {
  return (
    <div className="hidden md:flex">
      <nav>
        <ul className="flex justify-between gap-x-6">
            <li>Why Open Enterprise</li>
            <li>Features</li>
            <li>Contribute</li>
            <li className="text-Green">Request Early Access</li>
        </ul>
      </nav>
    </div>
  )
}

export default DesktopNav
