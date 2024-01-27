import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What are the holidays offered at Agilify?",
    "List all the health benefits offered by Agilify.",
    "Does the Agilify Employee Handbook mention specific work hours for employees?",
    "How are tasks managed and added in Harvest?"
];

const GPT4V_EXAMPLES: string[] = [
    "What are the holidays offered at Agilify?",
    "List all the health benefits offered by Agilify.",
    "Does the Agilify Employee Handbook mention specific work hours for employees?",
    "How are tasks managed and added in Harvest?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
