import { Title, Text, Anchor, Button, createStyles, SegmentedControl } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useStyles } from './Welcome.styles';




export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
       <Button radius="xl" sx={{ height: 30 }}>
          Log in / Register
       </Button>
      <Title className={classes.title} align="center" mt={100}>
        <Text inherit variant="gradient" component="span">
          RentPH
        </Text>

      </Title>
      <Text size="lg" weight={700} className={classes.title}>
        What do you want to rent
      </Text>
      <div style={{textAlign : 'center', height: '5rem'}}>
        <SegmentedControl
        radius="xl"
        size="md"
        data={['All', 'Cars', 'Apartment', 'Bedspace', 'Propery', 'Land']}
        classNames={classes}
          />
      </div>
        <Text size="lg" weight={700} className={classes.title}>
        Availability
      </Text>
      <div style={{textAlign : '-webkit-center', height: '5rem'}}>
        <DatePicker
          style={{ marginTop: 20 }}
          placeholder="Select date to check availability"
          classNames={classes}
          clearable={false}
          sx={{ width: '15rem' }}
        />
      </div>
      <Text size="lg" weight={700} className={classes.title}>
        Pin your preferred location
      </Text>
 
    </>
  );
}
