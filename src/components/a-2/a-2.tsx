import classNames from 'classnames';
import styles from './a-2.module.scss';

export interface A2Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-a-2s-and-templates
 */
export const A2 = ({ className }: A2Props) => {
    return <div className={classNames(styles.root, className)}>A</div>;
};
