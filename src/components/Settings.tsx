import React, { useEffect, useState } from 'react'
import { useSettingsContext } from '../utils/settingsContext'

interface Props {
  show: boolean
  onShowChange: () => void
}

function Settings({ show, onShowChange }: Props) {
  const { settings, setSettings } = useSettingsContext()
  const [notify, setNotify] = useState<boolean>(settings.notify || false)
  const [special, setSpecial] = useState<boolean>(settings.special || false)
  const [location, hideLocation] = useState<boolean>(settings.location || false)
  const [event, hideEvent] = useState<boolean>(settings.event || false)

  useEffect(() => {
    setSettings({ notify, special, location, event })
  }, [notify, special, location, event])

  return show ? (
    <div className="w-full p-2 bottom-0 nisborder border-t-4 border-x-0 border-b-0">
      <div className="flex items-center">
        <p className="flex-grow font-bold text-lg">Settings</p>
        <div
          className="nissmallimagebutton menubutton float-right text-center"
          onClick={onShowChange}
          title="Close settings"
        >
          <i className="fa fa-close fa-lg" />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="p-2">
          <input className="mr-2" type="checkbox" name="notify" checked={notify} onChange={() => setNotify(!notify)} />
          Notify 5 minutes before start
        </label>
        <label className="p-2">
          <input
            className="mr-2"
            type="checkbox"
            name="special"
            checked={special}
            onChange={() => setSpecial(!special)}
          />
          Only show special events
        </label>
        <label className="p-2">
          <input
            className="mr-2"
            type="checkbox"
            name="location"
            checked={location}
            onChange={() => hideLocation(!location)}
          />
          Hide Location
        </label>
        <label className="p-2">
          <input
            className="mr-2"
            type="checkbox"
            name="event"
            checked={event}
            onChange={() => hideEvent(!event)}
          />
          Hide Event
        </label>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Settings