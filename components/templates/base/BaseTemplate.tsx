import styles from './BaseTemplate.module.css';

export type Props = {
  sampleTextProp: string;
}

const BaseTemplate = ({ sampleTextProp }: Props) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;