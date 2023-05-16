import { View} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text, Image, Spinner} from 'native-base'
import styles from './styles';
import { useState } from 'react';

interface ILogin {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<ILogin>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ILogin) => {
    try{
      setIsLoading(true);
      const { email, password } = data;

    }catch(err){
      console.log(err);
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0C0F14' }}>
     {isLoading ? <Spinner size="lg" color="#D27842" /> :
    <>
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
              w="70%"
              style={styles.formInput}
            />
          )}
          name="email"
          rules={{ required: true }}
          defaultValue=""
        />
        <View style={styles.errorMsg}>
          {errors.email && <Text style={styles.errorText}>Você deve preencher com seu email</Text>}
        </View>
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Senha"
              secureTextEntry
              onBlur={field.onBlur}
              onChangeText={(data) => field.onChange(data)}
              value={field.value}
              variant="unstyled"
              size="lg Input"
              w="70%"
              style={styles.formInput}
            />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        <View style={styles.errorMsg}>
          {errors.password && <Text style={styles.errorText}>Você deve preencher com sua senha</Text>}
        </View>
          <Button
            onPress={handleSubmit(onSubmit)}
            style={styles.submitButton}
            w="35%"
          >
            <Text bold fontSize="md" style={{color: "white"}}>Entrar</Text>
          </Button>
    </> }
    </View>
  )
}
