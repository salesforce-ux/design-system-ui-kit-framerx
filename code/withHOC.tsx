import * as React from "react"
import * as System from "@salesforce/design-system-react"
import { url } from "framer/resource"
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css"

const iconPath = "code/icons"

export function withHOC(Component): React.SFC {
    return (props: any) => {
        return <Component {...props} />
    }
}
