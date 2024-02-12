import classNames from 'classnames';
import styles from './new-component.module.scss';
import Image from 'react-bootstrap/Image';

export interface NewComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https:help.codux.com/kb/en/article/configuration-for-new-components-and-templates
 */

export const NewComponent = ({ className }: NewComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Image
                src="https://static.wixstatic.com/media/68d3a9_e54bc05fc07647e189baeee0441eb104~mv2.jpg"
                alt="descriptive text"
                fluid
                sizes={''}
            />
        </div>
    );
};
