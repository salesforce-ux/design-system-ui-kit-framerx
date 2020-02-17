import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

import { ActionIcon } from "./icon-components/action-icon-components/ActionIcon"
import { UtilityIcon } from "./icon-components/utility-icon-components/UtilityIcon"
import { StandardIcon } from "./icon-components/standard-icon-components/StandardIcon"
import { DoctypeIcon } from "./icon-components/doctype-icon-components/DoctypeIcon"
import { CustomIcon } from "./icon-components/custom-icon-components/CustomIcon"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

const category = {
    Utility: UtilityIcon,
    Action: ActionIcon,
    Standard: StandardIcon,
    Doctype: DoctypeIcon,
    Custom: CustomIcon,
}

export function Icon(props) {
    const NamedIcon = category[props.category]
    return <NamedIcon {...props} />
}

Icon.defaultProps = {
    width: 155,
    height: 155,
}

addPropertyControls(Icon, {
    category: {
        type: ControlType.Enum,
        options: ["Utility", "Action", "Standard", "Doctype", "Custom"],
        defaultValue: "Utility",
    },
    name: {
        type: ControlType.String,
        defaultValue: "activity",
    },
    fill: {
        type: ControlType.Color,
        defaultValue: "#fff",
    },
})
