<script lang="ts" setup>
import type { CardType } from '~/composables/useCard';

const { createCard, getCardsType } = useCard();
const { getBoxes, getBoxStepFromBox } = useBox();
const { getTags } = useTags();
const { data: boxes } = await getBoxes();


interface CardValue {
  reference: string;
  question: string;
  answer: string;
  boxId: number | null;
  boxStepId: number | null;
  tagIds: number[];
  cardTypeId: number;
}



const optionsBoxes = ref((boxes?.value ?? []).map((box: { id: number | null, name: string }) => {
  return {
    id: box.id,
    name: box.name
  };
}));


const optionsCardsType = await getCardsType() as CardType[];
optionsBoxes.value.push({
  id: -1,
  name: 'Aucune boite'
});

const {data: optionsTags} = await getTags();
const tagsSelected = ref([])
const optionsBoxSteps = ref();


const cardValue = ref<CardValue>({
  reference: '',
  question: '',
  answer: '',
  boxId: -1,
  boxStepId: null,
  tagIds: [],
  cardTypeId: 1,
});

watchEffect(async () => {
  if(cardValue.value.boxId) {
    const {data: boxSteps} = await getBoxStepFromBox(cardValue.value.boxId);
    if(boxSteps.value) {
      optionsBoxSteps.value = boxSteps.value.map((step: { id: number | null, interval: number }) => {
        return {
          id: step.id,
          interval: step.interval.toString()
        };
      }); 
      cardValue.value.boxStepId = boxSteps.value[0].id;
    }
  }
  if(cardValue.value.boxId === -1) {
    cardValue.value.boxStepId = null;
  }
});

watchEffect(() => {
  cardValue.value.tagIds = tagsSelected.value.map((tag) => {
    const foundTag = optionsTags.value!.find((option) => option.name === tag);
    return foundTag ? foundTag.id : null; // Ensure to return the tag ID or null
  }).filter((id) => id !== null) as number[]; // Filter out null values and assert type
});

watchEffect(() => {
    console.log(cardValue.value.boxStepId);
});
const onSubmit = () => {
  if(cardValue.value.boxId === -1) {
    cardValue.value.boxId = null;
  }
  createCard(cardValue.value);
  
  cardValue.value = {
    reference: '',
    question: '',
    answer: '',
    boxId: -1,
    boxStepId: null,
    tagIds: [],
    cardTypeId: 1,
  }; 
};
</script>

<template>
  <div>
    <CardsSectionTitle
      title="Créer une carte"
      :back="true"
      @back="$router.back()"
    >
    </CardsSectionTitle>
    <div>
      <UForm :state="cardValue" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Boîte" name="box">
          <USelectMenu
            selected-icon="i-heroicons-hand-thumb-up-solid"
            class="w-full lg:w-48"
            :options="optionsCardsType"
            v-model="cardValue.cardTypeId"

            optionAttribute="name"
            valueAttribute="id"
          >
            <template #option="{ option: optionsCardsType }">
              <span class="truncate">{{ optionsCardsType.name }}</span>
            </template>
          </USelectMenu>
        </UFormGroup>
        <UFormGroup label="Réference" name="reference">
          <UInput v-model="cardValue.reference" />
        </UFormGroup>

        <UFormGroup label="Question*" name="question">
          <UInput v-model="cardValue.question" />
        </UFormGroup>

        <UFormGroup label="Réponse*" name="answer">
          <UInput v-model="cardValue.answer" />
        </UFormGroup>

        <UFormGroup label="Boîte" name="box">
          <USelectMenu
            selected-icon="i-heroicons-hand-thumb-up-solid"
            class="w-full lg:w-48"
            :options="optionsBoxes"
            v-model="cardValue.boxId!"
            optionAttribute="name"
            valueAttribute="id"
          >
            <template #option="{ option: box }">
              <span class="truncate">{{ box.name }}</span>
            </template>
          </USelectMenu>
        </UFormGroup>


          <UFormGroup v-if="cardValue.boxId !== -1" label="Compartiment" name="stepbox">
          <USelectMenu
            selected-icon="i-heroicons-hand-thumb-up-solid"
            class="w-full lg:w-48"
            :options="optionsBoxSteps"
            v-model="cardValue.boxStepId!"
            optionAttribute="interval"
            valueAttribute="id"
          >
          <template #option="{ option }">
              <span class="truncate">{{ option.interval}} jours </span>
          </template>

          </USelectMenu>
        </UFormGroup>
        <UFormGroup label="Tags" name="tags">
          <USelectMenu 
          v-model="tagsSelected" 
          :options="optionsTags!"
          optionAttribute="name"
          valueAttribute="name"
          multiple>
            <template #label>
              <span v-if="tagsSelected.length" class="truncate">{{ tagsSelected.join(', ') }}</span>
            </template>
          </USelectMenu>
        </UFormGroup>
        <UButton type="submit">
          Valider
        </UButton>
      </UForm>
    </div>
  </div>
</template>

<style></style>
