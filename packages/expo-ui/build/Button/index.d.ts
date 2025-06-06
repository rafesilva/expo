import { StyleProp, ViewStyle } from 'react-native';
import { MaterialIcon } from './types';
import { ViewEvent } from '../src/types';
/**
 * The role of the button.
 * - `default` - The default button role.
 * - `cancel` - A button that cancels the current operation.
 * - `destructive` - A button that deletes data or performs a destructive action.
 * @platform ios
 */
export type ButtonRole = 'default' | 'cancel' | 'destructive';
/**
 * The built-in button styles available on iOS and Android.
 *
 * Common styles:
 * - `default` - The default system button style.
 * - `bordered` - A button with a light fill. On Android equivalent to `FilledTonalButton`.
 * - `borderless` - A button with no background or border. On Android equivalent to `TextButton`.
 *
 * Apple-only styles:
 * - `borderedProminent` - A bordered button with a prominent appearance.
 * - `plain` - A button with no border or background and a less prominent text.
 * MacOS-only styles:
 * - `accessoryBar` - A button style for accessory bars.
 * - `accessoryBarAction` - A button style for accessory bar actions.
 * - `card` - A button style for cards.
 * - `link` - A button style for links.
 *
 * Android-only styles:
 * - `outlined` - A button with an outline.
 * - `elevated` - A filled button with a shadow.
 */
export type ButtonVariant = 'default' | 'bordered' | 'plain' | 'borderedProminent' | 'borderless' | 'accessoryBar' | 'accessoryBarAction' | 'card' | 'link' | 'outlined' | 'elevated';
/**
 * Colors for button's core elements.
 * @platform android
 */
export type ButtonElementColors = {
    containerColor?: string;
    contentColor?: string;
    disabledContainerColor?: string;
    disabledContentColor?: string;
};
export type ButtonProps = {
    /**
     * A callback that is called when the button is pressed.
     */
    onPress?: () => void;
    /**
     * A string describing the system image to display in the button.
     * Uses Material Icons on Android and SF Symbols on iOS.
     */
    systemImage?: {
        ios?: string;
        android?: MaterialIcon;
    };
    /**
     * Indicated the role of the button.
     * @platform ios
     */
    role?: ButtonRole;
    /**
     * The button variant.
     */
    variant?: ButtonVariant;
    /**
     * Additional styles to apply to the button.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * The text to display inside the button.
     */
    children: string;
    /**
     * Colors for button's core elements.
     * @platform android
     */
    elementColors?: ButtonElementColors;
    /**
     * Button color.
     */
    color?: string;
    /**
     * Disabled state of the button.
     */
    disabled?: boolean;
};
/**
 * @hidden
 */
export type NativeButtonProps = Omit<ButtonProps, 'role' | 'onPress' | 'children' | 'systemImage'> & {
    buttonRole?: ButtonRole;
    text: string;
    systemImage?: string;
} & ViewEvent<'onButtonPressed', void>;
/**
 * @hidden
 */
export declare function transformButtonProps(props: ButtonProps): NativeButtonProps;
/**
 * Displays a native button component.
 */
export declare function Button(props: ButtonProps): import("react").JSX.Element;
//# sourceMappingURL=index.d.ts.map