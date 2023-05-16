import { View, Text} from 'react-native';
import { Button, Input,  Image, Spinner, Flex, ScrollView, useToast } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ValidadeAndSubmitFormChain } from '../../store/services/validate';


export default function CreateScreen() {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<any>(null);
  const toast = useToast();

  const toastId = 'validate';

  const createData = new ValidadeAndSubmitFormChain();

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      selectionLimit: 1,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      data.imageFile = image;
      const newData = await createData.start(data);


      setValue('title', '');
      setValue('email', '');
      setValue('imageFile', '');
      setImage(null);
    }catch (err){
      if(err instanceof Error){
        if(!toast.isActive(toastId)){
          toast.show({title: "Error",
            description: err.message,
            variant: "solid"
          });
        }
      }else{
        console.log(err);
      }
    }finally{
      setIsLoading(false);
    }

  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: '#0C0F14' }}>
      {isLoading ? <Spinner size="lg" color="#D27842" />  :

          <View style={{width: '80%', marginTop: 100, marginBottom: 70}}>
            <Text style={{fontWeight: 'bold', fontSize: 45, color: '#FBFEFF'}} >Cadastro</Text>
            <ScrollView height='100%'>
              <Controller
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Nome"
                    onBlur={field.onBlur}
                    onChangeText={(data) => field.onChange(data)}
                    value={field.value}
                    variant="unstyled"
                    size="lg Input"
                    w="100%"
                    style={ {
                      backgroundColor: '#1F2738',
                      color: '#FBFEFF',
                      height: 55,
                      borderRadius: 15,
                      marginTop: 5,
                      marginBottom: 10

                    }}
                  />
                )}
                name="title"
                defaultValue=""
              />
              <Controller
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Email"
                    onBlur={field.onBlur}
                    onChangeText={(data) => field.onChange(data)}
                    value={field.value}
                    variant="unstyled"
                    size="lg Input"
                    w="100%"
                    style={ {
                      backgroundColor: '#1F2738',
                      color: '#FBFEFF',
                      height: 55,
                      borderRadius: 15,
                      marginTop: 5,
                      marginBottom: 10

                    }}
                  />
                )}
                name="email"
                defaultValue=""
              />
              { !image ? <Button style={{backgroundColor: '#D27842', marginTop: 15}}>
                  <Text style={{color: '#FBFEFF', fontWeight: 'bold'}} onPress={() => selectImage()}>Adicionar Imagem</Text>
                </Button> :
                <Flex flexDirection='column' alignItems='center' justifyContent='space-between'>
                  <Image alt='image-selected' source={{ uri: image }} style={{ width: 200, height: 150,  marginTop: 10, marginBottom: 10}}/>
                  <Button onPress={() => setImage(null)} width='30%' style={{backgroundColor: '#D27842'}} >
                    <Text style={{color: '#FBFEFF', fontWeight: 'bold'}}>Remover</Text>
                  </Button>
                </Flex>

              }
              <View style={{marginTop: 15 , flexDirection:"row", justifyContent: 'space-between', alignItems: 'center',width: '100%'}}>
                <Button onPress={handleSubmit(onSubmit)} width='100%' style={{backgroundColor: '#D27842'}} >
                  <Text style={{color: '#FBFEFF', fontWeight: 'bold'}}>Cadastrar</Text>
                </Button>
              </View>
            </ScrollView>
          </View>
      }
    </View>

  );
}
