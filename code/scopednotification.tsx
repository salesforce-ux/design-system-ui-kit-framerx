import * as React from "react"
import * as System from "@salesforce/design-system-react"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { generateIconPropertyControls } from "./utils/propertyControls"

import { Icon } from "./icon"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

export const ScopedNotification = function (props) {
    return (
        <System.ScopedNotification
            {...props}
            style={style}
            icon={
                props.icon ? (
                    <Icon
                        category={props.category}
                        name={props.name}
                        size={props.size}
                        assistiveText={{ label: props.assistiveText }}
                    />
                ) : null
            }
        >
            <p>
                {props.text} <a>{props.link}</a>
            </p>
        </System.ScopedNotification>
    )
}

ScopedNotification.defaultProps = {
    width: 550,
    height: 50,
}

addPropertyControls(ScopedNotification, {
    icon: { title: "Icon", defaultValue: false, type: ControlType.Boolean },
    text: {
        type: ControlType.String,
        title: "Text",
        defaultValue: "It looks as if duplicates exist for this lead.",
    },
    link: {
        type: ControlType.String,
        title: "Link",
        defaultValue: "View Duplicates.",
    },
    theme: {
        title: "Theme",
        defaultValue: "light",
        type: ControlType.Enum,
        options: ["light", "dark"],
        optionTitles: ["Light", "Dark"],
    },
    ...generateIconPropertyControls({
        hidden: (props) => props.icon === false,
    }),
})
