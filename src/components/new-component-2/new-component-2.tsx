import classNames from 'classnames';
import './new-component-2.css';

export interface NewComponent2Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-new-component-2s-and-templates
 */
export const NewComponent2 = ({ className }: NewComponent2Props) => {
    return (
        <div
            className={classNames(
                className,
                'globalComponent',
                'componentFromOtherFolder',
                'component'
            )}
        >
            NewComponent2
        </div>
    );
};
