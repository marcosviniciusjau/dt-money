import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { useMemo } from 'react'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return {
      income: transactions
        .filter((transaction) => transaction.type === 'income')
        .reduce((acc, transaction) => {
          return acc + transaction.price
        }, 0),
      outcome: transactions
        .filter((transaction) => transaction.type === 'outcome')
        .reduce((acc, transaction) => {
          return acc + transaction.price
        }, 0),
      total: transactions.reduce((acc, transaction) => {
        return acc + transaction.price
      }, 0),
    }
  }, [transactions])

  return summary
}
