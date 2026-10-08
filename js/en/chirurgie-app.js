const SECTIONS = [
  {
    "id": "hanche",
    "kind": "hip",
    "name": "Hip",
    "tagline": "The major weight-bearing joint.",
    "items": [
      {
        "name": "Total hip arthroplasty (THA)",
        "tag": "Hip",
        "principe": "Replacement of the worn hip joint (osteoarthritis, avascular necrosis, fracture) with implants. Press-fit uncemented acetabular cup, cemented or uncemented femoral stem depending on bone quality, ceramic or metal-on-polyethylene femoral head. Objective: eliminate pain and durably restore mobility.",
        "deroulement": "General anaesthesia or spinal block. Day-case procedure possible in selected patients. Anterior or posterior approach depending on patient morphology and surgeon preference. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Hip revision arthroplasty",
        "tag": "Hip",
        "principe": "Re-operation on an existing THA for aseptic loosening, implant wear, recurrent dislocation, infection or periprosthetic fracture. Requires comprehensive pre-operative work-up (bloods, bone scan, CT scan) to identify the cause and plan implant exchange.",
        "deroulement": "General anaesthesia. May require bone reconstruction (grafts, revision implants). The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Core decompression of the femoral head",
        "tag": "Hip",
        "principe": "Surgical treatment of avascular necrosis of the femoral head at early stages (ARCO I–II). Involves drilling a tunnel through the femoral neck to the necrotic zone to reduce intra-osseous pressure and stimulate revascularisation. May be combined with stem cell injection or bone grafting.",
        "deroulement": "General anaesthesia or spinal block. Performed under intraoperative fluoroscopic guidance. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Arthroscopic osteoplasty (FAI)",
        "tag": "Hip",
        "principe": "Arthroscopic treatment of femoroacetabular impingement (cam and/or pincer). Resection of excess bone at the head-neck junction (cam osteoplasty) and/or acetabular rim (acetabuloplasty), combined with labral repair or reinsertion using anchors. Corrects the mechanical cause and preserves cartilage.",
        "deroulement": "Hip arthroscopy under general anaesthesia. Intraoperative orthopaedic traction table. 2 to 3 arthroscopic portals. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Neurolysis (sciatic nerve)",
        "tag": "Hip",
        "principe": "Surgical release of the sciatic nerve compressed by the piriformis muscle or other anatomical structures in the gluteal region (piriformis syndrome, dynamic compressions). Neurolysis aims to free the nerve from the structures responsible for the identified entrapment. The site and extent of release are tailored to symptoms, identified deficits and assessment findings.",
        "deroulement": "The nerve release procedure, anaesthesia and length of stay are discussed individually during consultation, according to the compression site and the planned procedure.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      }
    ]
  },
  {
    "id": "genou",
    "kind": "knee",
    "name": "Knee",
    "accroche": "The most heavily loaded joint.",
    "items": [
      {
        "name": "Total knee arthroplasty (TKA)",
        "tag": "Knee",
        "principe": "Replacement of the worn femoro-tibial and patellar articular surfaces with metal implants and a polyethylene tibial insert. Indicated for advanced uni- or tricompartmental knee osteoarthritis. Lower limb alignment correction is integrated into the surgical procedure.",
        "deroulement": "General or spinal anaesthesia according to the anaesthetic assessment. ROSA may assist implant planning and positioning when indicated; its use does not guarantee a better individual outcome. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Unicompartmental knee arthroplasty (UKA)",
        "tag": "Knee",
        "principe": "Selective replacement of the single affected compartment (medial or lateral), preserving the cruciate ligaments and healthy compartments. Indicated for isolated unicompartmental osteoarthritis in active patients with intact ligaments. Less invasive than TKA.",
        "deroulement": "General or spinal anaesthesia according to the anaesthetic assessment. ROSA may assist implant planning and positioning when indicated; its use does not guarantee a better individual outcome. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "High tibial osteotomy (HTO)",
        "tag": "Knee",
        "principe": "Surgical correction of lower limb alignment to offload the arthritic medial compartment. Involves opening the proximal tibia medially and correcting to 3–5° of residual valgus using a locking plate (TomoFix). Preserves the native joint. Indicated in young, active patients with isolated medial compartment osteoarthritis.",
        "deroulement": "General anaesthesia. Preoperative planning on standing long-leg radiograph is essential. Osteotomy performed under intraoperative fluoroscopic guidance. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "ACL reconstruction (Anterior Cruciate Ligament)",
        "tag": "Knee",
        "principe": "Reconstruction of the torn ACL using an autograft to restore anterior and rotational stability of the knee. Three graft options depending on morphology and activity: patellar tendon (bone-tendon-bone), hamstrings (gracilis/semitendinosus), or quadriceps tendon. Lemaire extra-articular tenodesis added if significant rotational instability.",
        "deroulement": "Arthroscopy under general anaesthesia. Tibial and femoral bone tunnels for graft fixation with interference screws or staples. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "PCL reconstruction (Posterior Cruciate Ligament)",
        "tag": "Knee",
        "principe": "Reconstruction of the torn PCL using autograft or allograft to restore posterior knee stability. Indicated for grade III tears or combined injuries (posterolateral corner). Trans-tibial or tibial inlay technique depending on tear location.",
        "deroulement": "Arthroscopy ± supplementary open approach depending on technique. General anaesthesia. Simultaneous posterolateral corner reconstruction if required. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Partial arthroscopic meniscectomy",
        "tag": "Knee",
        "principe": "Arthroscopic economic resection of the unstable, non-repairable meniscal zone (avascular area). Mechanical offloading procedure to eliminate painful impingement. Preserves the maximum functional meniscal tissue. Indicated for degenerative lesions or non-suturable white-zone tears.",
        "deroulement": "Arthroscopy under general or regional anaesthesia. Day-case in the vast majority of cases. 2 arthroscopic portals. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Arthroscopic meniscal repair",
        "tag": "Knee",
        "principe": "Arthroscopic repair of a traumatic meniscal tear in the vascular zone (red zone). Gold standard for preserving the meniscus in young patients. All-inside (FasT-Fix), inside-out or outside-in techniques depending on location. Often combined with ACL reconstruction to optimise healing.",
        "deroulement": "Arthroscopy under general anaesthesia. Resorbable sutures or suture anchors via arthroscopic portals. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Autologous cartilage graft — AutoCart technique",
        "tag": "Knee",
        "principe": "Autologous cartilage grafting may be considered for selected localised cartilage lesions after examination and imaging. The indication depends on the lesion and the condition of the joint.",
        "deroulement": "The technique uses the patient’s cartilage during the same procedure. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Patellar instability surgery",
        "tag": "Knee",
        "principe": "Surgical correction of recurrent patellar dislocation by reconstruction of the medial patellofemoral ligament (MPFL) and/or realignment of the anterior tibial tubercle (ATT). Procedure choice based on anatomical assessment: ATT-TG distance, patellar height, trochlear dysplasia (Dejour classification). Trochleoplasty for severe dysplasia.",
        "deroulement": "General anaesthesia. MPFL reconstruction using gracilis or quadriceps tendon graft — ATT osteotomy via mini-approach if medialisation required. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      }
    ]
  },
  {
    "id": "cheville",
    "kind": "ankle",
    "name": "Ankle",
    "accroche": "Stability with every step.",
    "items": [
      {
        "name": "Ankle ligament reconstruction",
        "tag": "Ankle",
        "principe": "Anatomical reconstruction of the anterior talofibular ligament (ATFL) and calcaneofibular ligament (CFL) to treat chronic ankle instability following recurrent sprains. Broström-Gould technique: resection and reinforcement of the ligaments with retensioning of the extensor retinaculum. Global gold standard, achievable by pure arthroscopy. Restores mechanical stability while preserving native ankle kinematics.",
        "deroulement": "General or regional anaesthesia. Performed as a day case. Arthroscopic or mini-open approach depending on anatomy. Associated osteochondral talar lesions treated simultaneously if required. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Ankle arthroscopy",
        "tag": "Ankle",
        "principe": "Arthroscopic exploration and surgical treatment of the ankle (2 to 3 portals). Main indications: anterior or posterior impingement (tibial and talar osteophytes, os trigonum), chronic synovitis, intra-articular loose bodies, osteochondral lesions of the talus, joint debridement. Anterior arthroscopy for dorsiflexion impingement; posterior endoscopy in prone position for posterior impingement and flexor hallucis longus (FHL) tendon release.",
        "deroulement": "General or regional anaesthesia. Performed as a day case. Intraoperative pneumatic tourniquet. 2 to 3 portals depending on anterior or posterior approach. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Ankle cartilage graft",
        "tag": "Ankle",
        "principe": "Autologous cartilage grafting may be considered for selected localised cartilage lesions after examination and imaging. The indication depends on the lesion and the condition of the joint.",
        "deroulement": "The technique uses the patient’s cartilage during the same procedure. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Achilles tendon surgery",
        "tag": "Ankle",
        "principe": "Surgical management of Achilles tendon pathology resistant to conservative treatment (Alfredson protocol, shockwave therapy). Several procedures depending on the condition: tenoscopy (endoscopic debridement of the tendon sheath and neovessels) for mid-portion tendinopathy — open tenotomy with longitudinal tenotomies (tendon combing) for degenerative forms — flexor hallucis longus (FHL) tendon transfer for severe insertional tendinopathy with resection of the calcified enthesis — minimally invasive direct repair for acute tendon ruptures.",
        "deroulement": "General or regional anaesthesia. Performed as a day case. Prone position. Endoscopic (tenoscopy) or mini-open approach depending on indication. Intraoperative pneumatic tourniquet. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      }
    ]
  },
  {
    "id": "pied",
    "kind": "foot",
    "name": "Foot",
    "accroche": "Where everything starts — and bears.",
    "items": [
      {
        "name": "Hallux valgus surgery",
        "tag": "Foot",
        "principe": "Surgical correction of big toe deformity by first metatarsal osteotomy. Reference technique: Scarf osteotomy combined with Akin osteotomy for moderate to severe forms. Basal M1 osteotomy for severe forms with high M1–M2 angle. First metatarsophalangeal arthrodesis for rheumatological or arthritic forms. Objective: correct the deformity, eliminate pain and allow normal footwear.",
        "deroulement": "Regional anaesthesia (ankle block) or general. Performed as a day case. Medial mini-approach. Internal fixation with screws or staples. Simultaneous correction of lateral toes if required. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Toe deformity surgery",
        "tag": "Foot",
        "principe": "Surgical correction of claw or hammer toe deformities of the lateral toes. Flexible forms: percutaneous flexor tenotomy and PIP joint capsulotomy. Rigid forms: PIP joint resection arthroplasty (Du Vries technique) or PIP arthrodesis with wire or implant. Weil osteotomy of the corresponding metatarsal if associated transfer metatarsalgia. Often performed simultaneously with hallux valgus correction.",
        "deroulement": "Regional anaesthesia (ankle block) or general. Performed as a day case. Dorsal or percutaneous approach depending on technique. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Morton's neuroma surgery",
        "tag": "Foot",
        "principe": "Surgical resection of the neuroma (fibrous hypertrophy of the common plantar digital nerve) in the affected intermetatarsal space, most commonly the 3rd space (M3–M4). Reference dorsal intermetatarsal approach: resection of the neuroma and associated transverse metatarsal ligament. Plantar approach reserved for surgical revisions. Indicated after failure of conservative treatment (orthotics, injections, sclerosing alcohol).",
        "deroulement": "Regional anaesthesia (ankle block) or general. Performed as a day case. Dorsal intermetatarsal approach, discrete scar. Complete excision of the neuroma and commissural band. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Midfoot arthrodesis (Lisfranc)",
        "tag": "Foot",
        "principe": "Surgical fusion of the Lisfranc joints (tarsometatarsal) affected by primary or post-traumatic arthritis (sequelae of Lisfranc fracture-dislocation). Resection of degenerate articular cartilage and fixation of the involved rays with dedicated screws or plates until complete bony union. Aims to reduce pain from the affected joints; residual pain may persist.",
        "deroulement": "General or regional anaesthesia. Dorsal approach. Internal fixation with compression screws or dedicated plate depending on rays involved. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Metatarsalgia surgery",
        "tag": "Foot",
        "principe": "Lowering and shortening osteotomy of the metatarsal head (Weil technique) to relieve mechanical metatarsalgia from overloading of the central rays (M2–M3–M4). Involves an oblique osteotomy of the metatarsal head allowing its proximal translation and lowering, thereby reducing plantar pressure under the affected head. Often combined with correction of corresponding toe deformities.",
        "deroulement": "Regional anaesthesia (ankle block) or general. Performed as a day case. Dorsal approach. May involve 1 to 3 rays depending on baropodometric assessment. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      }
    ]
  },
  {
    "id": "traumatologie",
    "kind": "trauma",
    "name": "Trauma surgery",
    "accroche": "Urgent care, without delay.",
    "items": [
      {
        "name": "Internal fixation of lower limb fractures",
        "tag": "Trauma",
        "principe": "Surgical stabilisation of lower limb fractures with metallic implants (screws, plates, intramedullary nails) to allow bony union and early weight-bearing. Implant choice depends on fracture type, bone segment, bone quality and skin condition. Femoral neck fractures: percutaneous screw fixation or arthroplasty depending on age and displacement — Trochanteric fractures: intramedullary nailing (gamma nail, PFNA) — Femoral and tibial shaft fractures: locked intramedullary nailing — Tibial plateau fractures: locking plate according to Schatzker classification — Malleolar fractures: screw fixation or wiring according to Weber classification.",
        "deroulement": "General anaesthesia or spinal block depending on location. Systematic intraoperative fluoroscopic control. 3D CT scan essential preoperatively for complex articular fractures. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Acute knee ligament repair",
        "tag": "Trauma",
        "principe": "Surgical treatment of acute knee ligamentous injuries (ACL, PCL, grade III MCL, LCL, posterolateral corner) in unstable or combined forms. Knee dislocation is an absolute vascular and surgical emergency. Peripheral injuries (LCL, posterolateral corner) benefit from early repair-reinsertion at day 10–15 to optimise healing. ACL reconstruction is deferred until the acute inflammatory phase has resolved.",
        "deroulement": "General anaesthesia. Systematic preoperative vascular assessment in case of dislocation (CT angiography). Diagnostic arthroscopy combined for assessment of meniscal and cartilaginous injuries. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Achilles tendon repair (acute rupture)",
        "tag": "Trauma",
        "principe": "Surgical repair of the ruptured Achilles tendon may be considered after assessment. Surgery and functional non-surgical treatment are discussed according to the tear, time since injury, activity level and individual risks. The technique and weight-bearing plan are individualised.",
        "deroulement": "General or regional anaesthesia. Performed as a day case. Prone position. Posterior mini-approach or percutaneous technique. Intraoperative tendon tension checked. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Patellar and quadriceps tendon repair",
        "tag": "Trauma",
        "principe": "Emergency surgical repair of extensor mechanism ruptures of the knee. Patellar tendon rupture (young athlete <40 years, often on pre-existing tendinopathy): direct repair reinforced with trans-osseous cerclage or patellar anchors. Quadriceps tendon rupture (patient >50 years, predisposing comorbidities: renal failure, corticosteroids, obesity): direct trans-osseous or anchor repair, reinforced with Dacron bands if tissue quality is poor. Functional emergency — delay <15 days to avoid retraction.",
        "deroulement": "General anaesthesia or spinal block. Systematic intraoperative check of active extension before wound closure. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      },
      {
        "name": "Reduction and stabilisation of dislocations",
        "tag": "Trauma",
        "principe": "Surgical or orthopaedic management of traumatic and prosthetic dislocations of the lower limb. Traumatic hip dislocation: reduction as an absolute emergency under general anaesthesia (<6 hours to prevent avascular necrosis) — systematic post-reduction CT scan. Knee dislocation: vascular emergency — systematic CT angiography — immediate reduction. Recurrent THA dislocation: surgical revision of implants (cup/stem orientation, change to large-head 36–40 mm or dual-mobility cup, capsular reconstruction). TKA dislocation: revision with constrained implants if persistent instability.",
        "deroulement": "Orthopaedic reduction as an emergency under general anaesthesia for traumatic dislocations. The duration of surgery and length of stay are discussed individually during consultation.",
        "suites": "Weight-bearing, any brace or immobilisation, rehabilitation and follow-up are adapted to the procedure and your recovery. Your surgical team will give you an individual plan. Return to work, driving and sport requires assessment of your function and the appropriate clearance; no fixed timeline or outcome can be guaranteed."
      }
    ]
  }
];

function InterventionsHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 180,
      paddingBottom: 80,
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.42,
      mixBlendMode: 'screen',
      filter: 'hue-rotate(180deg) saturate(1.4) contrast(1.15) brightness(1.1)',
      pointerEvents: 'none',
      zIndex: 0,
      maskImage: 'radial-gradient(ellipse 75% 85% at 70% 55%, black 30%, rgba(0,0,0,0.6) 65%, transparent 95%)',
      WebkitMaskImage: 'radial-gradient(ellipse 75% 85% at 70% 55%, black 30%, rgba(0,0,0,0.6) 65%, transparent 95%)'
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "../assets/chirurgie-hero.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {className: "eyebrow page-topic"}, "Orthopaedic surgery in Sète"), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display"
  }, "Surgical")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display soft-dynamic",
    style: {
      color: 'var(--gold)',
      fontStyle: 'italic',
      display: 'inline-block'
    }
  }, "procedures.")), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      maxWidth: 600,
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      marginTop: 48,
      fontFamily: 'var(--serif)',
      fontStyle: 'italic'
    }
  }, "From arthroplasty to arthroscopy — every procedure, explained.")));
}

/* ============================================================
   Section header (between groups)
   ============================================================ */
function SectionHeader({
  section,
  index
}) {
  const deeper = index % 2 === 1;
  return /*#__PURE__*/React.createElement("section", {
    id: section.id === "traumatologie" ? "trauma" : section.id,
    style: {
      background: deeper ? 'var(--bg-deep)' : 'var(--bg)',
      borderTop: '1px solid var(--line)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 100,
      paddingBottom: 40
    }
  }, ["hanche","genou","cheville","pied"].includes(section.id) ? React.createElement(AnatomyBackground, {kind: {hanche:"hip",genou:"knee",cheville:"ankle",pied:"foot"}[section.id]}) : null, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold reveal"
  }, "◍ /", String(index + 1).padStart(2, '0'), " — ", section.name), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, section.name, ".", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, section.tagline))));
}

/* ============================================================
   Accordion item
   ============================================================ */
function InterventionRow({
  item,
  isOpen,
  onToggle,
  deeper
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: deeper ? 'var(--bg-deep)' : 'var(--bg)',
      borderBottom: '1px solid var(--line)',
      transition: 'background 0.4s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle, "aria-expanded": isOpen,
    className: "hoverable",
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      color: 'var(--ink)',
      padding: '32px 0',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto auto',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      opacity: 0.6,
      fontSize: 12
    }
  }, isOpen ? '−' : '+'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 'clamp(24px, 3vw, 36px)',
      lineHeight: 1.15,
      fontWeight: 500,
      letterSpacing: '-0.01em'
    }
  }, item.name), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.14em',
      padding: '6px 12px',
      border: '1px solid rgba(0, 212, 255, 0.4)',
      background: 'rgba(0, 212, 255, 0.08)',
      color: 'var(--gold)',
      borderRadius: 999
    }
  }, item.tag.toUpperCase()), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      fontSize: 18,
      transition: 'transform 0.4s ease',
      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
      display: 'inline-block',
      width: 14,
      textAlign: 'center'
    }
  }, "›")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: isOpen ? '1fr' : '0fr',
      transition: 'grid-template-rows 0.5s cubic-bezier(0.7, 0, 0.2, 1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "intervention-grid",
    style: {
      padding: isOpen ? '8px 0 56px' : '0',
      transition: 'padding 0.4s',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement(Column, {
    label: "01 / Overview",
    body: item.principe
  }), /*#__PURE__*/React.createElement(Column, {
    label: "02 / Procedure",
    body: item.deroulement,
    bordered: true
  }), /*#__PURE__*/React.createElement(Column, {
    label: "03 / Recovery",
    body: item.suites,
    bordered: true
  }))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) {
          .intervention-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .intervention-col-bordered { border-left: 0 !important; padding-left: 0 !important; padding-top: 24px; border-top: 1px solid var(--line); }
        }
      `));
}
function Column({
  label,
  body,
  bordered
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: bordered ? 'intervention-col-bordered' : '',
    style: {
      paddingLeft: bordered ? 36 : 0,
      paddingRight: 36,
      borderLeft: bordered ? '1px solid rgba(0, 212, 255, 0.25)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      fontSize: 11,
      letterSpacing: '0.16em',
      marginBottom: 16
    }
  }, "— ", label.toUpperCase()), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--ink)',
      margin: 0
    }
  }, body));
}

/* ============================================================
   App
   ============================================================ */
function App() {
  useReveal();
  const [openKey, setOpenKey] = useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cursor, null), /*#__PURE__*/React.createElement(Nav, {
    active: "chirurgie"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(InterventionsHero, null), React.createElement(RegionNav, null), /*#__PURE__*/React.createElement(Marquee, {
    items: ['THA', 'TKA', 'ACL', 'Arthroscopy', 'Osteotomy', 'Cartilage', 'Tendon', 'Ligament', 'Arthroplasty']
  }), SECTIONS.map((sec, si) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: sec.id
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    section: sec,
    index: si
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: si % 2 === 1 ? 'var(--bg-deep)' : 'var(--bg)'
    }
  }, sec.items.map((it, ii) => {
    const key = `${sec.id}-${ii}`;
    return /*#__PURE__*/React.createElement(InterventionRow, {
      key: key,
      item: it,
      isOpen: openKey === key,
      onToggle: () => setOpenKey(openKey === key ? null : key),
      deeper: si % 2 === 1
    });
  }))))), React.createElement("p", {className:"anatomy-credit"}, "Anatomical models : ", React.createElement("a", {href:"../assets/anatomy/ATTRIBUTION.txt"}, "Z-Anatomy / BodyParts3D · CC BY-SA")), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
