import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "List all the health benefits offered by Agilify?",
        value: "List all the health benefits offered by Agilify?"
    },
    { text: "What happens in a performance review?", value: "What happens in a performance review?" },
    { text: "Give all the steps on timesheet entry.", value: "Give all the steps on timesheet entry." }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
