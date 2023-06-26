type PromiseSettledAwaited<K extends string, V> = Record<K, Awaited<V>>;

type PromiseSettledReturn<K extends string, V> = Promise<PromiseSettledAwaited<K, V>>;

type PromiseSettledProps<K extends string, V> = Record<K, V>;

export async function promiseSettled<K extends string, V extends Promise<object>>(
  datas: PromiseSettledProps<K, V>,
): PromiseSettledReturn<K, V> {
  // Taking off the keys for further re-assign
  const keys = Object.keys(datas);
  // Taking off the values to make the promises's array
  const values = Object.values(datas) as Iterable<V>;

  const results = await Promise.allSettled<V>(values).then(promise =>
    promise.reduce((acc, result, i) => {
      // Not adding the 'rejected' returns (? Must show 'Not Found')
      if (result.status == 'fulfilled') {
        return { ...acc, [keys[i]]: result.value };
      }
      return acc;
    }, {} as PromiseSettledAwaited<K, V>),
  );

  return results;
}
