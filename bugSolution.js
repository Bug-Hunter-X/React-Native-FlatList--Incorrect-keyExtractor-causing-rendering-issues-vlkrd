The solution is to provide a unique key for each item in your data array.  Avoid using index. The `keyExtractor` function should map each item to a unique identifier.  Here's how you can fix the code:

```javascript
// bugSolution.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
];

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(item) => item.id} // Use a unique identifier
    />
  );
};

export default App;
```

By using a unique `id` from each item as the key, React Native can efficiently track and update items in the FlatList, preventing glitches and ensuring correct rendering.