// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  // The Pila aequor generator!
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      // The mutate method. Replaces a single base at a random location with.
      mutate() {
        let mutatedLocation = Math.floor(Math.random() * 15) 
        let mutatedDNA = returnRandBase()
        while (this.dna[mutatedLocation] === mutatedDNA) {
          mutatedDNA = returnRandBase();
        }
        this.dna[mutatedLocation] = mutatedDNA;
        return dna;
      },
      // A method that compares the current specimen with the specimen indicated in the method.
      compareDNA(pAequorC) {
        let identicalCount = 0;
        for(i = 0; i < dna.length; i++){
          if(this.dna[i] === pAequorC.dna[i]){
            identicalCount +=1;
          }
        }
        let identicalPercent = Math.floor((identicalCount / 15) * 100);
        console.log(`The DNA of P. aequor #${this.specimenNum} is ${identicalPercent}% similar to P. aequor #${pAequorC.specimenNum}.`);
      },
      willLikelySurvive(){
        let numberCG = 0;
        for (j = 0; j < dna.length; j++) {
          if(this.dna[j] === 'C' || this.dna[j] === 'G') {
            numberCG +=1;
          }
        }
        let percentCG = Math.floor((numberCG / 15 * 100));
        return percentCG >= 60 ? true : false;
      }
    }
  }

  
  //Create an array of 30 Pila aequor that are likely to survive.
  let thrivingPAequor = [];
  let sampleIterator = 1;
  while (sampleIterator <= 30) {
    let sample = pAequorFactory(sampleIterator, mockUpStrand());
    if (sample.willLikelySurvive() === true){
      thrivingPAequor.push(sample);
      sampleIterator++
    }
  }


  //Format and log a list to console of the specimen number, dna sequence, and whether it is likely to survive. (Should all be true.)
  for(i=0;i<30;i++){
    console.log(`Specimen Number: ${thrivingPAequor[i].specimenNum} \nBase Sequence: ${thrivingPAequor[i].dna} \nLikely to Survive? ${thrivingPAequor[i].willLikelySurvive()}\n`);
  };

  const pAequor1 = pAequorFactory(1, mockUpStrand());
  const pAequor2 = pAequorFactory(2, mockUpStrand());
  
  
  console.log ('///--- Run 1 ---///');
  console.log(pAequor1.dna);
  console.log(pAequor2.dna);
  pAequor1.compareDNA(pAequor2), console.log('\n');
  
  pAequor1.mutate(), console.log('!!! ------ P. aequor 1 has mutated! ------ !!! \n');
  
  console.log ('///--- Run 2 ---///');
  console.log(pAequor1.dna);
  console.log(pAequor2.dna);
  pAequor1.compareDNA(pAequor2)
  console.log("\n")
  console.log(pAequor1.willLikelySurvive());
  
  console.log(thrivingPAequor)