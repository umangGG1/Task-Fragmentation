# Task-Fragmentation
AN assignment to test the fragmentation ability of Developers

My Pick - Fragmentation of Functinality into a custom hook that will be reusable throughout the app.

## My Reasons for Fragmentating it like that
1. Optimized Data Fetching with useBurnTransactions:
Chain-Specific Updates: Instead of fetching all burn transactions on every render, useBurnTransactions fetches them only when the walletChain.id changes. This optimizes data usage and performance, especially if dealing with large transaction sets or many chains.
Dynamic Data Display: The component automatically updates the displayed burn transactions when the user switches chains, providing a seamless and responsive user experience.

2. Context-Aware Supply Information with useAppSupplies:
Conditional Supply Filtering: The hook allows fetching all supplies or filtering them based on the selected chain using the includeAll flag. This enables presenting relevant supply information depending on the chosen burn context.
Flexible Display Options: Depending on your application's needs, you can choose to display overall supplies or chain-specific supplies, offering flexibility and adaptability.

3. Centralized Wallet and Chain Management with useWalletAndChain:
Reduced Redundancy: By combining wallet and chain logic into a single hook, you eliminate code duplication and simplify data management. This promotes maintainability and avoids potential inconsistencies.
Clear State Management: The hook encapsulates the state of wallet connection, wallet address, and available chains, making it easier to track and access this information throughout the component.

4. Simplified Burning Process with useBurnTokens:
Encapsulated Logic: The hook hides the complexity of interacting with the token contract and executing the burn transaction behind a simple executeBurn function. This makes the burning process less error-prone and easier to integrate.
Reusable Functionality: The executeBurn function can be used in other components as well, promoting code reuse and consistency across the application.

5. Improved Maintainability and Testability:
Modular Code: Breaking down the component logic into smaller, focused hooks enhances code readability and understanding. This makes it easier to maintain the codebase and identify potential issues.
Independent Testing: Each hook can be tested in isolation, ensuring the reliability of individual functionalities without needing to test the entire component every time.
