import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import "../slds-icon-styles.css"
import { custom1_icon } from ".//custom1_icon"
import { custom10_icon } from ".//custom10_icon"
import { custom100_icon } from ".//custom100_icon"
import { custom101_icon } from ".//custom101_icon"
import { custom102_icon } from ".//custom102_icon"
import { custom103_icon } from ".//custom103_icon"
import { custom104_icon } from ".//custom104_icon"
import { custom105_icon } from ".//custom105_icon"
import { custom106_icon } from ".//custom106_icon"
import { custom107_icon } from ".//custom107_icon"
import { custom108_icon } from ".//custom108_icon"
import { custom109_icon } from ".//custom109_icon"
import { custom11_icon } from ".//custom11_icon"
import { custom110_icon } from ".//custom110_icon"
import { custom111_icon } from ".//custom111_icon"
import { custom112_icon } from ".//custom112_icon"
import { custom113_icon } from ".//custom113_icon"
import { custom12_icon } from ".//custom12_icon"
import { custom13_icon } from ".//custom13_icon"
import { custom14_icon } from ".//custom14_icon"
import { custom15_icon } from ".//custom15_icon"
import { custom16_icon } from ".//custom16_icon"
import { custom17_icon } from ".//custom17_icon"
import { custom18_icon } from ".//custom18_icon"
import { custom19_icon } from ".//custom19_icon"
import { custom2_icon } from ".//custom2_icon"
import { custom20_icon } from ".//custom20_icon"
import { custom21_icon } from ".//custom21_icon"
import { custom22_icon } from ".//custom22_icon"
import { custom23_icon } from ".//custom23_icon"
import { custom24_icon } from ".//custom24_icon"
import { custom25_icon } from ".//custom25_icon"
import { custom26_icon } from ".//custom26_icon"
import { custom27_icon } from ".//custom27_icon"
import { custom28_icon } from ".//custom28_icon"
import { custom29_icon } from ".//custom29_icon"
import { custom3_icon } from ".//custom3_icon"
import { custom30_icon } from ".//custom30_icon"
import { custom31_icon } from ".//custom31_icon"
import { custom32_icon } from ".//custom32_icon"
import { custom33_icon } from ".//custom33_icon"
import { custom34_icon } from ".//custom34_icon"
import { custom35_icon } from ".//custom35_icon"
import { custom36_icon } from ".//custom36_icon"
import { custom37_icon } from ".//custom37_icon"
import { custom38_icon } from ".//custom38_icon"
import { custom39_icon } from ".//custom39_icon"
import { custom4_icon } from ".//custom4_icon"
import { custom40_icon } from ".//custom40_icon"
import { custom41_icon } from ".//custom41_icon"
import { custom42_icon } from ".//custom42_icon"
import { custom43_icon } from ".//custom43_icon"
import { custom44_icon } from ".//custom44_icon"
import { custom45_icon } from ".//custom45_icon"
import { custom46_icon } from ".//custom46_icon"
import { custom47_icon } from ".//custom47_icon"
import { custom48_icon } from ".//custom48_icon"
import { custom49_icon } from ".//custom49_icon"
import { custom5_icon } from ".//custom5_icon"
import { custom50_icon } from ".//custom50_icon"
import { custom51_icon } from ".//custom51_icon"
import { custom52_icon } from ".//custom52_icon"
import { custom53_icon } from ".//custom53_icon"
import { custom54_icon } from ".//custom54_icon"
import { custom55_icon } from ".//custom55_icon"
import { custom56_icon } from ".//custom56_icon"
import { custom57_icon } from ".//custom57_icon"
import { custom58_icon } from ".//custom58_icon"
import { custom59_icon } from ".//custom59_icon"
import { custom6_icon } from ".//custom6_icon"
import { custom60_icon } from ".//custom60_icon"
import { custom61_icon } from ".//custom61_icon"
import { custom62_icon } from ".//custom62_icon"
import { custom63_icon } from ".//custom63_icon"
import { custom64_icon } from ".//custom64_icon"
import { custom65_icon } from ".//custom65_icon"
import { custom66_icon } from ".//custom66_icon"
import { custom67_icon } from ".//custom67_icon"
import { custom68_icon } from ".//custom68_icon"
import { custom69_icon } from ".//custom69_icon"
import { custom7_icon } from ".//custom7_icon"
import { custom70_icon } from ".//custom70_icon"
import { custom71_icon } from ".//custom71_icon"
import { custom72_icon } from ".//custom72_icon"
import { custom73_icon } from ".//custom73_icon"
import { custom74_icon } from ".//custom74_icon"
import { custom75_icon } from ".//custom75_icon"
import { custom76_icon } from ".//custom76_icon"
import { custom77_icon } from ".//custom77_icon"
import { custom78_icon } from ".//custom78_icon"
import { custom79_icon } from ".//custom79_icon"
import { custom8_icon } from ".//custom8_icon"
import { custom80_icon } from ".//custom80_icon"
import { custom81_icon } from ".//custom81_icon"
import { custom82_icon } from ".//custom82_icon"
import { custom83_icon } from ".//custom83_icon"
import { custom84_icon } from ".//custom84_icon"
import { custom85_icon } from ".//custom85_icon"
import { custom86_icon } from ".//custom86_icon"
import { custom87_icon } from ".//custom87_icon"
import { custom88_icon } from ".//custom88_icon"
import { custom89_icon } from ".//custom89_icon"
import { custom9_icon } from ".//custom9_icon"
import { custom90_icon } from ".//custom90_icon"
import { custom91_icon } from ".//custom91_icon"
import { custom92_icon } from ".//custom92_icon"
import { custom93_icon } from ".//custom93_icon"
import { custom94_icon } from ".//custom94_icon"
import { custom95_icon } from ".//custom95_icon"
import { custom96_icon } from ".//custom96_icon"
import { custom97_icon } from ".//custom97_icon"
import { custom98_icon } from ".//custom98_icon"
import { custom99_icon } from ".//custom99_icon"

const icons = {
    custom1: custom1_icon,
    custom10: custom10_icon,
    custom100: custom100_icon,
    custom101: custom101_icon,
    custom102: custom102_icon,
    custom103: custom103_icon,
    custom104: custom104_icon,
    custom105: custom105_icon,
    custom106: custom106_icon,
    custom107: custom107_icon,
    custom108: custom108_icon,
    custom109: custom109_icon,
    custom11: custom11_icon,
    custom110: custom110_icon,
    custom111: custom111_icon,
    custom112: custom112_icon,
    custom113: custom113_icon,
    custom12: custom12_icon,
    custom13: custom13_icon,
    custom14: custom14_icon,
    custom15: custom15_icon,
    custom16: custom16_icon,
    custom17: custom17_icon,
    custom18: custom18_icon,
    custom19: custom19_icon,
    custom2: custom2_icon,
    custom20: custom20_icon,
    custom21: custom21_icon,
    custom22: custom22_icon,
    custom23: custom23_icon,
    custom24: custom24_icon,
    custom25: custom25_icon,
    custom26: custom26_icon,
    custom27: custom27_icon,
    custom28: custom28_icon,
    custom29: custom29_icon,
    custom3: custom3_icon,
    custom30: custom30_icon,
    custom31: custom31_icon,
    custom32: custom32_icon,
    custom33: custom33_icon,
    custom34: custom34_icon,
    custom35: custom35_icon,
    custom36: custom36_icon,
    custom37: custom37_icon,
    custom38: custom38_icon,
    custom39: custom39_icon,
    custom4: custom4_icon,
    custom40: custom40_icon,
    custom41: custom41_icon,
    custom42: custom42_icon,
    custom43: custom43_icon,
    custom44: custom44_icon,
    custom45: custom45_icon,
    custom46: custom46_icon,
    custom47: custom47_icon,
    custom48: custom48_icon,
    custom49: custom49_icon,
    custom5: custom5_icon,
    custom50: custom50_icon,
    custom51: custom51_icon,
    custom52: custom52_icon,
    custom53: custom53_icon,
    custom54: custom54_icon,
    custom55: custom55_icon,
    custom56: custom56_icon,
    custom57: custom57_icon,
    custom58: custom58_icon,
    custom59: custom59_icon,
    custom6: custom6_icon,
    custom60: custom60_icon,
    custom61: custom61_icon,
    custom62: custom62_icon,
    custom63: custom63_icon,
    custom64: custom64_icon,
    custom65: custom65_icon,
    custom66: custom66_icon,
    custom67: custom67_icon,
    custom68: custom68_icon,
    custom69: custom69_icon,
    custom7: custom7_icon,
    custom70: custom70_icon,
    custom71: custom71_icon,
    custom72: custom72_icon,
    custom73: custom73_icon,
    custom74: custom74_icon,
    custom75: custom75_icon,
    custom76: custom76_icon,
    custom77: custom77_icon,
    custom78: custom78_icon,
    custom79: custom79_icon,
    custom8: custom8_icon,
    custom80: custom80_icon,
    custom81: custom81_icon,
    custom82: custom82_icon,
    custom83: custom83_icon,
    custom84: custom84_icon,
    custom85: custom85_icon,
    custom86: custom86_icon,
    custom87: custom87_icon,
    custom88: custom88_icon,
    custom89: custom89_icon,
    custom9: custom9_icon,
    custom90: custom90_icon,
    custom91: custom91_icon,
    custom92: custom92_icon,
    custom93: custom93_icon,
    custom94: custom94_icon,
    custom95: custom95_icon,
    custom96: custom96_icon,
    custom97: custom97_icon,
    custom98: custom98_icon,
    custom99: custom99_icon,
}

const sizes = {
    "xx-small": "slds-icon_xx-small",
    "x-small": "slds-icon_x-small",
    small: "slds-icon_small",
    medium: "slds-icon_medium",
    large: "slds-icon_large",
}

export function CustomIcon(props) {
    const NamedIcon = icons[props.name]
    return (
        <figure>
            <span
                className={"slds-icon_container slds-icon-custom-" + props.name}
            >
                <NamedIcon
                    {...props}
                    className={"slds-icon " + sizes[props.size]}
                />
            </span>
        </figure>
    )
}

CustomIcon.defaultProps = {
    width: 24,
    height: 25,
}

addPropertyControls(CustomIcon, {
    fill: {
        type: ControlType.Color,
        title: "Fill",
        defaultValue: "#ffffff",
    },
    name: {
        type: ControlType.Enum,
        options: [
            "custom1",
            "custom10",
            "custom100",
            "custom101",
            "custom102",
            "custom103",
            "custom104",
            "custom105",
            "custom106",
            "custom107",
            "custom108",
            "custom109",
            "custom11",
            "custom110",
            "custom111",
            "custom112",
            "custom113",
            "custom12",
            "custom13",
            "custom14",
            "custom15",
            "custom16",
            "custom17",
            "custom18",
            "custom19",
            "custom2",
            "custom20",
            "custom21",
            "custom22",
            "custom23",
            "custom24",
            "custom25",
            "custom26",
            "custom27",
            "custom28",
            "custom29",
            "custom3",
            "custom30",
            "custom31",
            "custom32",
            "custom33",
            "custom34",
            "custom35",
            "custom36",
            "custom37",
            "custom38",
            "custom39",
            "custom4",
            "custom40",
            "custom41",
            "custom42",
            "custom43",
            "custom44",
            "custom45",
            "custom46",
            "custom47",
            "custom48",
            "custom49",
            "custom5",
            "custom50",
            "custom51",
            "custom52",
            "custom53",
            "custom54",
            "custom55",
            "custom56",
            "custom57",
            "custom58",
            "custom59",
            "custom6",
            "custom60",
            "custom61",
            "custom62",
            "custom63",
            "custom64",
            "custom65",
            "custom66",
            "custom67",
            "custom68",
            "custom69",
            "custom7",
            "custom70",
            "custom71",
            "custom72",
            "custom73",
            "custom74",
            "custom75",
            "custom76",
            "custom77",
            "custom78",
            "custom79",
            "custom8",
            "custom80",
            "custom81",
            "custom82",
            "custom83",
            "custom84",
            "custom85",
            "custom86",
            "custom87",
            "custom88",
            "custom89",
            "custom9",
            "custom90",
            "custom91",
            "custom92",
            "custom93",
            "custom94",
            "custom95",
            "custom96",
            "custom97",
            "custom98",
            "custom99_icon",
        ],
    },
    size: {
        type: ControlType.Enum,
        options: ["xx-small", "x-small", "small", "medium", "large"],
        defaultValue: "small",
    },
})
