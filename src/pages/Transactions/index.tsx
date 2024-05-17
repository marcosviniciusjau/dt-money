import {Header} from '../../components/Header'
import { Summary } from '../../components/Summary'
import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles'
export function Transactions() {
    return (
         <div>
             <Header />
             <Summary />
            
            <TransactionsContainer>
            <TransactionsTable>
                <tbody>
                 <tr>
                    <td width="50%">Desenvolvimento de site</td>
                    <td>
                      <PriceHighlight variant="income">
                        R$ 12.000,00
                      </PriceHighlight>
                    </td>
                    <td>Venda</td>
                    <td>17/05/2024</td>
                 </tr>
                 <tr>
                 <td width="50%">Hambúrguer</td>
                 <td>
                      <PriceHighlight variant="outcome">
                        -R$ 59,90
                      </PriceHighlight>
                    </td>
                    <td>Venda</td>
                    <td>17/04/2024</td>
                 </tr>
                 <tr>
                 <td width="50%">Alimentação</td>
                 <td>
                      <PriceHighlight variant="income">
                        R$ 12.000,00
                      </PriceHighlight>
                    </td>
                    <td>Venda</td>
                    <td>17/03/2024</td>
                 </tr>
                </tbody>
             </TransactionsTable>
            </TransactionsContainer>
           
         </div>
    )
}