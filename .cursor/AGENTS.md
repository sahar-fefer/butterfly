# Agent Guidelines for Butterfly Project

This document outlines guidelines for using AI agents within the Butterfly project. Adhering to these guidelines ensures consistency, maintainability, and effective collaboration when leveraging AI capabilities.

## General Principles

1.  **Clarity and Specificity**: When interacting with an agent, provide clear, specific instructions. Ambiguous requests can lead to unexpected or incorrect outcomes.
2.  **Contextual Awareness**: Ensure the agent has sufficient context for the task at hand. This might include relevant code snippets, file paths, or a description of the project's architecture.
3.  **Iterative Development**: Break down complex tasks into smaller, manageable steps. This allows for easier verification of the agent's output and quicker course correction.
4.  **Verification**: Always review the agent's output thoroughly before integrating it into the codebase. Agents are tools, and their output should be treated as a proposal, not a final solution.
5.  **Documentation**: Document any significant changes made by an agent, especially if they introduce new patterns, dependencies, or modify core logic.

## Code Generation and Modification

1.  **Adherence to Project Guidelines**: Any code generated or modified by an agent must strictly adhere to the project's existing code quality, style, and architectural guidelines (as defined in `.cursor/rules` and other relevant documentation).
2.  **No "Magic" Code**: Avoid allowing agents to generate complex or obscure code that is difficult for a human developer to understand or maintain. Prioritize readability and simplicity.
3.  **Testing**: If an agent generates new features or modifies existing ones, ensure that appropriate tests are also generated or updated to cover the changes.
4.  **Dependencies**: Be mindful of new dependencies introduced by agents. Ensure they are necessary, well-maintained, and compatible with the existing project stack.

## Communication and Collaboration

1.  **Transparent Usage**: If an agent is used to make significant contributions, it should be transparently noted in commit messages or pull request descriptions.
2.  **Feedback Loop**: Provide feedback on agent performance, especially for errors or suboptimal suggestions, to help improve its effectiveness over time.

## Ethical Considerations

1.  **Bias and Fairness**: Be aware of potential biases in agent-generated content or code. Review outputs critically to ensure fairness and inclusivity.
2.  **Security**: Agents should not be used to bypass security protocols or introduce vulnerabilities. All agent-generated code must undergo the same security reviews as human-written code.
3.  **Intellectual Property**: Understand the implications of using agents on intellectual property rights, especially if using third-party agent services.

By following these guidelines, we can effectively integrate AI agents into our development workflow, enhancing productivity while maintaining code quality and project integrity.
