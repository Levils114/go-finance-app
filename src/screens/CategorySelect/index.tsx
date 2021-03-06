import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../components/Forms/Button';
import { categories } from '../../utils/categories';
import {Container,
        Header,
        Title,
        Category,
        Icon,
        Name,
        Separator,
        Footer} from './styles';

interface Category{
   key: string;
   name: string;
}

interface CategorySelectProps{
   category: Category;
   setCategory(category: Category): void;
   closeSelectCategory(): void;
}

export default function CategorySelect(props: CategorySelectProps){
   return(
      <Container>
         <Header>
            <Title>Categoria</Title>
         </Header>
      
         <FlatList 
            data={categories}
            style={{
               flex: 1,
               width: '100%',
            }}
            keyExtractor={item => item.key}
            renderItem={({ item }) => (
               <Category onPress={() => props.setCategory(item)} isActive={props.category === item}>
                  <Icon name={item.icon} />
                  <Name>{item.name}</Name>
               </Category>
            )}
            ItemSeparatorComponent={() => <Separator />}
         />

         <Footer>
            <Button title="Selecionar" onPress={props.closeSelectCategory}/>
         </Footer>
      </Container>
   );
}